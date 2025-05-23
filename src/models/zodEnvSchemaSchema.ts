import { z } from 'zod';

const envSchema = z.object({
  ADMIN_ID: z.string().transform(Number),

  VALIDATOR_ADDR_CROSSFI: z.string(),
  VALIDATOR_SEED_CROSSFI: z.string(),
  VALIDATOR_ADDR_DECIMAL: z.string(),
  VALIDATOR_SEED_DECIMAL: z.string(),

  VALIDATOR_REWARD_ADDR_DECIMAL: z.string().default('0xe2c8943357fc8f4dbf52a869af3b1da4b1c3097d'),
  VALIDATOR_REWARD_ADDR_CROSSFI: z.string().default('mx1v2d99a2qrrr60peh3jdmwxjlmrzpxdz6jf0xm7'),

  START_BLOCK_HEIGHT_CROSSFI: z.string().transform(Number).default('0'),
  START_DATE_HEIGHT_DECIMAL: z.string(),

  COMMISION_PERCENT_VALIDATOR_DECIMAL: z.string().transform(Number).default('0.15'),
  CASHBACK_PERCENT_DECIMAL: z.string().transform(Number).default('0.60'),
  REF_PERCENT_DECIMAL: z.string().transform(Number).default('0.26'),

  COMMISION_PERCENT_VALIDATOR_CROSSFI: z.string().transform(Number),
  CASHBACK_PERCENT_CROSSFI: z.string().transform(Number),
  REF_PERCENT_CROSSFI: z.string().transform(Number),
  REF_PERCENT: z.string().transform(Number).default('0.25'),

  CROSSFI_RPC_URL: z.string().default('http://148.251.195.52:2765'),
  NODE_API_CROSSFI: z.string().default('https://cosmos-api.mainnet.ms/'),
  NODE_API_DECIMAL: z.string().default('https://api.decimalchain.com/')
});

export default envSchema