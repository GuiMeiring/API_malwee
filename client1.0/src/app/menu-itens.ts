import { GroupComponent } from "./group/group.component";
import { UserComponent } from "./user/user.component";

export const MenuItens = [
    {
        path: 'group',
        caption : 'Grupo',
        icon : 'assessment',
        component: GroupComponent,
    },
    {
        path: 'user',
        caption : 'Usuário',
        icon : 'person',
        component: UserComponent,
    }
]