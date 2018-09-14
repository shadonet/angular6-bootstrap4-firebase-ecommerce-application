
import {throwError as observableThrowError, empty as observableEmpty, Observable} from 'rxjs';
import {Injectable} from "@angular/core";
import { AngularFireDatabase } from 'angularfire2/database';
import { empty, of } from 'rxjs';

export interface Product {
    // Unique Id
    id: string;
    // Ref on category belongs to
    categoryId: string;
    // The title
    title: string;
    // Price
    price: number;
    // Mark product with specialprice
    isSpecial: boolean;
    // Description
    desc: string;
    // Path to small image
    imageS: string;
    // Path to large image
    imageL: string;
}

@Injectable()
export class ProductService {

    // URL to Products web api
    private productsUrl = "products";

    constructor(private db: AngularFireDatabase) {}

    getProducts(category?: string, search?: string): Observable<any> {
        if (category || search) {
            let query = <any>{};
            if (category) {
              return this.db
                  .list(this.productsUrl,
                    ref => ref.orderByChild('categoryId').equalTo(category)).valueChanges();

            } else {
              return this.db
                  .list(this.productsUrl,
                    ref => ref.orderByChild('title')
                    .startAt(search.toUpperCase())).valueChanges();
            }

        } else {
            return observableEmpty();
        }
    }

    getProduct(id: string): Observable<any> {
        return this.db
            .object(this.productsUrl + `/${id}`).valueChanges();
    }

    private handleError(error: any): Observable<any> {
        let errMsg = (error.message) ? error.message : error.status ?
            `${error.status} - ${error.statusText}` : "Server error";
        window.alert(`An error occurred: ${errMsg}`);
        return observableThrowError(errMsg);
    }
}
