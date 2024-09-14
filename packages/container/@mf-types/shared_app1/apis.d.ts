
    export type RemoteKeys = 'shared_app1/Login';
    type PackageType<T> = T extends 'shared_app1/Login' ? typeof import('shared_app1/Login') :any;