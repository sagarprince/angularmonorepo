export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type AdminAuth = {
   __typename?: 'AdminAuth',
  id: Scalars['Int'],
  email: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  status: Scalars['Boolean'],
  role: Scalars['String'],
};

export type AdminLoginResponse = {
   __typename?: 'AdminLoginResponse',
  accessToken: Scalars['String'],
  refreshToken: Scalars['String'],
  user: AdminAuth,
};

export type AdminRegisterInput = {
  email: Scalars['String'],
  password: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  status: Scalars['Boolean'],
  role: Scalars['String'],
};

export type AdminUpdateInput = {
  id: Scalars['Float'],
  email?: Maybe<Scalars['String']>,
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  status: Scalars['Boolean'],
  role: Scalars['String'],
};

export type AdminUsersFiltersInput = {
  currentUserId?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['Boolean']>,
};

export type AdminUsersResponse = {
   __typename?: 'AdminUsersResponse',
  totalCount: Scalars['Float'],
  entities: Array<AdminAuth>,
};

export type ChangePasswordInput = {
  id: Scalars['Float'],
  oldPassword: Scalars['String'],
  newPassword: Scalars['String'],
};

export type FacultiesFiltersInput = {
  offset?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  universityId?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['Boolean']>,
};

export type FacultiesResponse = {
   __typename?: 'FacultiesResponse',
  totalCount: Scalars['Float'],
  entities: Array<Faculty>,
};

export type Faculty = {
   __typename?: 'Faculty',
  id: Scalars['Int'],
  name: Scalars['String'],
  status: Scalars['Boolean'],
  university?: Maybe<University>,
};

export type FacultyAddInput = {
  name: Scalars['String'],
  universityId: Scalars['Int'],
  status: Scalars['Boolean'],
};

export type FacultyUpdateInput = {
  name: Scalars['String'],
  universityId: Scalars['Int'],
  status: Scalars['Boolean'],
  id: Scalars['Float'],
};

export type LoginInput = {
  email: Scalars['String'],
  password: Scalars['String'],
};

export type Mutation = {
   __typename?: 'Mutation',
  AddUniversity: Scalars['Boolean'],
  UpdateUniversity: Scalars['Boolean'],
  DeleteUniversity: Scalars['Boolean'],
  AddFaculty: Scalars['Boolean'],
  UpdateFaculty: Scalars['Boolean'],
  DeleteFaculty: Scalars['Boolean'],
  AdminLogin: AdminLoginResponse,
  AdminRegister: AdminAuth,
  AdminSendOTP: AdminAuth,
  AdminResendOTP: Scalars['Boolean'],
  AdminResetPassword: Scalars['Boolean'],
  UpdateAdminPassword: Scalars['Boolean'],
  UpdateAdminUser: Scalars['Boolean'],
  DeleteAdminUser: Scalars['Boolean'],
};


export type MutationAddUniversityArgs = {
  entity: UniversityAddInput
};


export type MutationUpdateUniversityArgs = {
  entity: UniversityUpdateInput
};


export type MutationDeleteUniversityArgs = {
  id: Scalars['Float']
};


export type MutationAddFacultyArgs = {
  entity: FacultyAddInput
};


export type MutationUpdateFacultyArgs = {
  entity: FacultyUpdateInput
};


export type MutationDeleteFacultyArgs = {
  id: Scalars['Float']
};


export type MutationAdminLoginArgs = {
  args: LoginInput
};


export type MutationAdminRegisterArgs = {
  args: AdminRegisterInput
};


export type MutationAdminSendOtpArgs = {
  email: Scalars['String']
};


export type MutationAdminResendOtpArgs = {
  email: Scalars['String'],
  id: Scalars['Float']
};


export type MutationAdminResetPasswordArgs = {
  args: ResetPasswordInput
};


export type MutationUpdateAdminPasswordArgs = {
  args: ChangePasswordInput
};


export type MutationUpdateAdminUserArgs = {
  entity: AdminUpdateInput
};


export type MutationDeleteAdminUserArgs = {
  id: Scalars['Float']
};

export type OtpInput = {
  email: Scalars['String'],
  otp: Scalars['String'],
};

export type Query = {
   __typename?: 'Query',
  Universities: UniversitiesResponse,
  Faculties: FacultiesResponse,
  AdminUsers: AdminUsersResponse,
};


export type QueryUniversitiesArgs = {
  params: UniversitiesFiltersInput
};


export type QueryFacultiesArgs = {
  params: FacultiesFiltersInput
};


export type QueryAdminUsersArgs = {
  params: AdminUsersFiltersInput
};

export type ResetPasswordInput = {
  email: Scalars['String'],
  otp: Scalars['String'],
  newPassword: Scalars['String'],
};

export type UniversitiesFiltersInput = {
  offset?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['Boolean']>,
};

export type UniversitiesResponse = {
   __typename?: 'UniversitiesResponse',
  totalCount: Scalars['Float'],
  entities: Array<University>,
};

export type University = {
   __typename?: 'University',
  id: Scalars['Int'],
  name: Scalars['String'],
  status: Scalars['Boolean'],
  faculty?: Maybe<Array<Faculty>>,
};

export type UniversityAddInput = {
  name: Scalars['String'],
  status: Scalars['Boolean'],
};

export type UniversityUpdateInput = {
  name: Scalars['String'],
  status: Scalars['Boolean'],
  id: Scalars['Float'],
};

