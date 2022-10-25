import type { GraphQLResolveInfo } from 'graphql';
import type { MercuriusContext } from 'mercurius';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) =>
  | Promise<import('mercurius-codegen').DeepPartial<TResult>>
  | import('mercurius-codegen').DeepPartial<TResult>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _FieldSet: any;
};

export type Flashcard = {
  __typename?: 'Flashcard';
  _id: Scalars['ID'];
  question: Scalars['String'];
  answer: Scalars['String'];
  category?: Maybe<Scalars['String']>;
};

export type Category = {
  __typename?: 'Category';
  _id: Scalars['ID'];
  category: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  flashcards: Array<Flashcard>;
  categories: Array<Category>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addFlashcard?: Maybe<Scalars['String']>;
  addCategory?: Maybe<Scalars['String']>;
  createNotification: Scalars['Boolean'];
};

export type MutationaddFlashcardArgs = {
  question: Scalars['String'];
  answer: Scalars['String'];
  category?: InputMaybe<Scalars['String']>;
};

export type MutationaddCategoryArgs = {
  category: Scalars['String'];
};

export type MutationcreateNotificationArgs = {
  message: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  newNotification: Scalars['String'];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Flashcard: ResolverTypeWrapper<Flashcard>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Category: ResolverTypeWrapper<Category>;
  Query: ResolverTypeWrapper<{}>;
  Mutation: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Subscription: ResolverTypeWrapper<{}>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Flashcard: Flashcard;
  ID: Scalars['ID'];
  String: Scalars['String'];
  Category: Category;
  Query: {};
  Mutation: {};
  Boolean: Scalars['Boolean'];
  Subscription: {};
};

export type FlashcardResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes['Flashcard'] = ResolversParentTypes['Flashcard'],
> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  question?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  answer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category'],
> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
  flashcards?: Resolver<Array<ResolversTypes['Flashcard']>, ParentType, ContextType>;
  categories?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = {
  addFlashcard?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<MutationaddFlashcardArgs, 'question' | 'answer'>
  >;
  addCategory?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<MutationaddCategoryArgs, 'category'>
  >;
  createNotification?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationcreateNotificationArgs, 'message'>
  >;
};

export type SubscriptionResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription'],
> = {
  newNotification?: SubscriptionResolver<
    ResolversTypes['String'],
    'newNotification',
    ParentType,
    ContextType
  >;
};

export type Resolvers<ContextType = MercuriusContext> = {
  Flashcard?: FlashcardResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
};

export type Loader<TReturn, TObj, TParams, TContext> = (
  queries: Array<{
    obj: TObj;
    params: TParams;
  }>,
  context: TContext & {
    reply: import('fastify').FastifyReply;
  },
) => Promise<Array<import('mercurius-codegen').DeepPartial<TReturn>>>;
export type LoaderResolver<TReturn, TObj, TParams, TContext> =
  | Loader<TReturn, TObj, TParams, TContext>
  | {
      loader: Loader<TReturn, TObj, TParams, TContext>;
      opts?: {
        cache?: boolean;
      };
    };
export interface Loaders<
  TContext = import('mercurius').MercuriusContext & { reply: import('fastify').FastifyReply },
> {
  Flashcard?: {
    _id?: LoaderResolver<Scalars['ID'], Flashcard, {}, TContext>;
    question?: LoaderResolver<Scalars['String'], Flashcard, {}, TContext>;
    answer?: LoaderResolver<Scalars['String'], Flashcard, {}, TContext>;
    category?: LoaderResolver<Maybe<Scalars['String']>, Flashcard, {}, TContext>;
  };

  Category?: {
    _id?: LoaderResolver<Scalars['ID'], Category, {}, TContext>;
    category?: LoaderResolver<Scalars['String'], Category, {}, TContext>;
  };
}
export type flashcardsQueryVariables = Exact<{ [key: string]: never }>;

export type flashcardsQuery = {
  __typename?: 'Query';
  flashcards: Array<{
    __typename?: 'Flashcard';
    _id: string;
    question: string;
    answer: string;
    category?: string | null;
  }>;
};

export type categoriesQueryVariables = Exact<{ [key: string]: never }>;

export type categoriesQuery = {
  __typename?: 'Query';
  categories: Array<{ __typename?: 'Category'; _id: string; category: string }>;
};

export type createNotificationMutationVariables = Exact<{
  message: Scalars['String'];
}>;

export type createNotificationMutation = { __typename?: 'Mutation'; createNotification: boolean };

export type addFlashcardMutationVariables = Exact<{
  question: Scalars['String'];
  answer: Scalars['String'];
  category?: InputMaybe<Scalars['String']>;
}>;

export type addFlashcardMutation = { __typename?: 'Mutation'; addFlashcard?: string | null };

export type addCategoryMutationVariables = Exact<{
  category: Scalars['String'];
}>;

export type addCategoryMutation = { __typename?: 'Mutation'; addCategory?: string | null };

export type newNotificationSubscriptionVariables = Exact<{ [key: string]: never }>;

export type newNotificationSubscription = { __typename?: 'Subscription'; newNotification: string };

export const flashcardsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'flashcards' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'flashcards' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '_id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'question' } },
                { kind: 'Field', name: { kind: 'Name', value: 'answer' } },
                { kind: 'Field', name: { kind: 'Name', value: 'category' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<flashcardsQuery, flashcardsQueryVariables>;
export const categoriesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'categories' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'categories' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '_id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'category' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<categoriesQuery, categoriesQueryVariables>;
export const createNotificationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createNotification' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'message' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createNotification' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'message' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'message' } },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<createNotificationMutation, createNotificationMutationVariables>;
export const addFlashcardDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'addFlashcard' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'question' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'answer' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'category' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'addFlashcard' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'question' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'question' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'answer' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'answer' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'category' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'category' } },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<addFlashcardMutation, addFlashcardMutationVariables>;
export const addCategoryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'addCategory' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'category' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'addCategory' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'category' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'category' } },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<addCategoryMutation, addCategoryMutationVariables>;
export const newNotificationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'subscription',
      name: { kind: 'Name', value: 'newNotification' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [{ kind: 'Field', name: { kind: 'Name', value: 'newNotification' } }],
      },
    },
  ],
} as unknown as DocumentNode<newNotificationSubscription, newNotificationSubscriptionVariables>;
declare module 'mercurius' {
  interface IResolvers extends Resolvers<import('mercurius').MercuriusContext> {}
  interface MercuriusLoaders extends Loaders {}
}
