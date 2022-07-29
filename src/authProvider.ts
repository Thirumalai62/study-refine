import { AuthProvider } from "@pankod/refine-core";

export const TOKEN_KEY = "refine-auth";

export const authProvider: AuthProvider = {
    login: async ({ username, password }) => {
        if (username === "admin" && password === "admin") {
            localStorage.setItem(TOKEN_KEY, username);
            return Promise.resolve();
        }
        return Promise.reject(new Error("username: admin, password: admin"));
    },
    logout: async () => {
        // console.log("redirectPath", redirectPath);
        localStorage.removeItem(TOKEN_KEY);
        return await Promise.resolve("/");
    },
    checkError: () => Promise.resolve(),
    checkAuth: () => {
        const token = localStorage.getItem(TOKEN_KEY);
        if (token) {
            return Promise.resolve();
        }

        return Promise.reject();
    },
    getPermissions: () => Promise.resolve(),
    getUserIdentity: async () => {
        const token = localStorage.getItem(TOKEN_KEY);
        if (!token) {
            return Promise.reject();
        }

        return Promise.resolve({
            name: "admin",
            avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
        });
    },
};
