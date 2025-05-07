import { exec } from 'child_process';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// Аналог __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function backupDB(urlDB: string) {
    // 1. Генерация метки времени
    const timestamp = new Date().toISOString().replace(/T/, '_').replace(/:/g, '-').replace(/\..+/, '');
    
    // 2. Формирование имени файла для бэкапа
    const backupFileName = `backup_${timestamp}.gz`;

    // Путь к папке для бэкапов
    const backupDir = path.join(__dirname, '..', 'backup_db');

    // Создаем папку, если ее не существует
    if (!fs.existsSync(backupDir)){
        fs.mkdirSync(backupDir);
    }

    // 3. Определение полного пути к файлу бэкапа
    const backupFilePath = path.join(backupDir, backupFileName);
    
    // 4. Формирование команды для создания бэкапа
    const command = `mongodump --uri="${urlDB}" --archive=${backupFilePath} --gzip`;

    // 5. Выполнение команды для создания бэкапа
    exec(command, (error, stdout, stderr) => {
        // 6. Обработка ошибок
        if (error) {
            console.error(`Ошибка выполнения команды: ${error.message}`);
            return;
        }
        
        // 7. Обработка сообщений об ошибках
        if (stderr) {
            console.error(`Ошибка: ${stderr}`);
            return;
        }
        
        // 8. Вывод сообщения об успешном выполнении
        console.log(`Результат: ${stdout}`);
        console.log(`Бэкап успешно создан: ${backupFilePath}`);
    });
}

export default backupDB;
