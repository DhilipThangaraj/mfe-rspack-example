
    export type RemoteKeys = 'shared_app4/PaymentAddressApp';
    type PackageType<T> = T extends 'shared_app4/PaymentAddressApp' ? typeof import('shared_app4/PaymentAddressApp') :any;