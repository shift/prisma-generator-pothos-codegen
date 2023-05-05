import path from 'path';
import { getDMMF, getSchema } from '@prisma/internals';

const simplePrismaSchema = getSchema(path.join(__dirname, './simpleSchema.prisma'));
const complexPrismaSchema = getSchema(path.join(__dirname, './complexSchema.prisma'));

export const getSampleDMMF = async (type: 'complex' | 'simple') => {
  return getDMMF({
    datamodel: type === 'complex' ? complexPrismaSchema.then((res) => { return res }) : simplePrismaSchema.then((res) => { return res }),
  });
};
