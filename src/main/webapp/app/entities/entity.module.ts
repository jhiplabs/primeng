import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'category',
                loadChildren: './category/category.module#PrimengCategoryModule'
            },
            {
                path: 'product',
                loadChildren: './product/product.module#PrimengProductModule'
            },
            {
                path: 'customer',
                loadChildren: './customer/customer.module#PrimengCustomerModule'
            },
            {
                path: 'address',
                loadChildren: './address/address.module#PrimengAddressModule'
            },
            {
                path: 'wish-list',
                loadChildren: './wish-list/wish-list.module#PrimengWishListModule'
            }
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
        ])
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PrimengEntityModule {}
