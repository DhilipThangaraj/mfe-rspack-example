
    export type RemoteKeys = 'shared_app1/AuthApp';
    type PackageType<T> = T extends 'shared_app1/AuthApp' ? typeof import('shared_app1/AuthApp') :any;