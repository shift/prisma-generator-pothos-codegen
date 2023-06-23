import * as Inputs from '@/schema/__generated__/inputs'
import { BatchPayload } from '../../objects';
import { db } from '@/db';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const updateManyWithoutIDMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.WithoutIDWhereInput, required: false }),
      data: t.arg({ type: Inputs.WithoutIDUpdateManyMutationInput, required: true }),
    },
    resolve: async (_root, args, _context, _info) =>
      await db.withoutID.updateMany({ where: args.where || undefined, data: args.data }),
  }),
);

export const updateManyWithoutIDMutation = defineMutation((t) => ({
  updateManyWithoutID: t.field(updateManyWithoutIDMutationObject(t)),
}));
