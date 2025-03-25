export const optionsHandler = (data = []) => {
    return data?.map((d) => ({ name: d?.name || d?.first_name, value: (d.id) }))
}
export const groupOptionsHandler = (data = []) => {
    return data?.map((d) => ({ name: d?.name || d?.group_name, value: (d.group_id) }))
}

export const metricOptionsHandler = (data = []) => {
    return data?.map((d) => ({ name: d.name, value: { id: d.id, name: d.name, periodicity_id: d.periodicity_id } }));
}

export const optionsHandlerWithName = (data = []) => {
    return data?.map((d) => ({ name: d?.name || d?.first_name, value: { id: d.id, name: d?.name || d?.first_name } }));
}