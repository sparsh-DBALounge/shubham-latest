export const optionsHandler = (data = []) => {
    return data?.map((d) => ({ name: d?.name || d?.first_name, value: (d.id) }))
}