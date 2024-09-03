import { connect } from 'mongoose'
import { readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { parse } from 'yaml'
import User from '../models/User.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const config = parse(readFileSync(join(__dirname, '..', 'config.yaml'), 'utf8'))
await connect(config.DB_URL)
const delegations = [
  'mx1qz595x3hjp9hfvepga4a3cn2z6vpk4q2tylgll',
  'mx1qr0gv9rwzjt3zvhlhjfmavacr2uacdcjc5k2tv',
  'mx1qy34d0qrckhulesmnga5637g95gp6c9df5w3nd',
  'mx1qylxqs5vp8zp960jwfaluat3ptg7z9xjn54356',
  'mx1q9lyv46aeea4zlcergfqypglq3uj6lss2d0rde',
  'mx1q8mg7xuksletu85266gs9swpt9tqg5dj300d9l',
  'mx1q8a00hupytemsezk4aspf8njqsq46gcv0lt572',
  'mx1qgqcvrpmn5zfmprvhxn2krf5c59y3q609asxf4',
  'mx1qgqlzs9juhemztmuk4rn3p09ua0qhtqyw3c7ja',
  'mx1qgy6ux3z8ykcfderf7aj3jmhuwjekkytwf7up4',
]

for (let i = 6; i <= 10; i++) {
  await User.create({
    _id: i,
    email: 'testmock@mail.com',
    referrer: 5,
    mpAddress: delegations[i],
    delegator: true,
  })
}
