export const filter_list = <T extends Record<string, any>>(list: T[], criterias: Map<string, any>) => {
    return list.filter(item => {
        if (!item) return false;
        
        let inclusionStatus = true;
        for (const [field, expected] of criterias) {
            if (expected === "All" || expected === 0) continue;
            inclusionStatus = inclusionStatus && (item[field] == expected || false);
        }
        return inclusionStatus;
    })
};
export const paginate_list = <T extends Object>(list: T[], page_size: number) => {
    const pages: T[][] = [];
    let number_pages = 0;
    for (let i = 0; i < list.length; i = i + page_size) {
        pages.push([...list].slice(i, i + page_size));
        number_pages += 1;
    }
    return {pages, number_pages};
}
