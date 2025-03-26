const API = {
    signIn: () => `/deactivation-service/login`,

    addUser: () => `/admin/addUser`,

    dashboard: () => `/admin/dashboardCountDetail`,

    deleteCookie: () => `/deactivation-service/delete-cookies`,

    getAllUsers: () => `/admin/get-user-data`,

    uploadFile: () => `/admin/upload`,

    downloadFile: () => `/deactivation-service/invokeUserStatusReport`,
}

export default API