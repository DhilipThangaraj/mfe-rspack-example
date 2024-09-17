type MountOptions = {
    onNavigate?: ({ pathname }: {
        pathname: string;
    }) => void;
    onSignIn?: () => void;
    defaultHistory?: boolean;
    initialPath?: string;
};
declare const mount: (el: HTMLElement | null, { onNavigate, onSignIn, defaultHistory, initialPath }: MountOptions) => void;
export { mount };
