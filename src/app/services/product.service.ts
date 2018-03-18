import {Injectable} from "@angular/core";
import { AngularFireDatabase } from 'angularfire2/database';
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/empty";

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

    getProducts(category?: string, search?: string): Observable<Product[]> {
        if (category || search) {
            let query = <any>{};
            if (category) {
                query.orderByChild = "categoryId";
                query.equalTo = category;
            } else {
                query.orderByChild = "title";
                query.startAt = search.toUpperCase();
                query.endAt = query.startAt + "\uf8ff";
            }
            return this.db
                .list(this.productsUrl, {
                    query: query
                })
                .catch(this.handleError);
        } else {
            return Observable.empty();
        }
    }

    getProduct(id: string): Observable<Product> {
        return this.db
            .object(this.productsUrl + `/${id}`)
            .catch(this.handleError);
    }

    private handleError(error: any): Observable<any> {
        let errMsg = (error.message) ? error.message : error.status ?
            `${error.status} - ${error.statusText}` : "Server error";
        window.alert(`An error occurred: ${errMsg}`);
        return Observable.throw(errMsg);
    }
}
