import { CollectionComponent } from "./collection/collection.component";
import { GroupComponent } from "./group/group.component";
import { ProductsComponent } from "./products/products.component";
import { SubgroupComponent } from "./subgroup/subgroup.component";
import { UserComponent } from "./user/user.component";

export const MenuItens = [
    {
        path: 'group',
        caption : 'Grupo',
        icon : 'assessment',
        component: GroupComponent,
    },
    {
        path: 'subgroup',
        caption : 'Sub Grupo',
        icon : 'class',
        component: SubgroupComponent,
    },
    {
        path: 'collection',
        caption : 'Coleções',
        icon : 'horizontal_split',
        component: CollectionComponent,
    },
    {
        path: 'products',
        caption : 'Produtos',
        icon : ' local_mall',
        component:ProductsComponent ,
    },
    {
        path: 'user',
        caption : 'Usuário',
        icon : 'person',
        component: UserComponent,
    },
    
]