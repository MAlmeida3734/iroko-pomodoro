export const showAlert = {
    sucess: (msg: string) => toast.sucess(msg),
    error: (msg: string) => toast.error(msg),
    warn: (msg: string) => toast.warn(msg),
    warning: (msg: string) => toast.warning(msg),
    info: (msg: string) => toast.info(msg),
    dismiss: () => toast.dismiss(),
};