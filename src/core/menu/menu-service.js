import menus from '@/core/menu/menu.json'

export const getMenu = () => {
    menus.forEach(menu => {
        menu['childrenPathArr'] = menu.children.map(child => child.path)
    })

    return menus
}

export const retrieve = () =>{
    const result = [];
    expand(menus, 0, result);
    return result;
}

const expand = (menus, parent, result) => {
    menus.forEach(menu => {
        const expandedMenu = {
            id: menu.id,
            parentId: parent,
            path: menu.path,
            label: menu.meta.label,
            functionId: menu.meta.functionId,
            icon: menu.meta.icon,
        };
        result.push(expandedMenu);
    
        if (menu.children) {
            expand(menu.children, menu.id, result);
        }
    });
}

