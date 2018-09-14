
import {throwError as observableThrowError, Observable} from 'rxjs';
import {Injectable} from "@angular/core";
import { AngularFireDatabase } from 'angularfire2/database';
import { catchError } from 'rxjs/operators';

export class Category {
    //  Unique Id
    id: string;
    // The title
    title: string;
    // Description
    desc: string;
    // Path to small image
    imageS: string;
    // Path to large image
    imageL: string;
}

@Injectable()
export class CategoryService {

    // URL to Categories web api
    private categoriesUrl = "categories";
    // We keep categories in cache variable
    private categories: Category[] = [];

    constructor(private db: AngularFireDatabase) {}

    getCategories(): Observable<any[]> {
        return this.db
            .list(this.categoriesUrl).valueChanges();
    }

    getCategory(id: string): Category {
        for (let i = 0; i < this.categories.length; i++) {
            if (this.categories[i].id === id) {
                return this.categories[i];
            }
        }
        return null;
    }

    private handleError(error: any): Observable<any> {
        let errMsg = (error.message) ? error.message : error.status ?
            `${error.status} - ${error.statusText}` : "Server error";
        window.alert(`An error occurred: ${errMsg}`);
        return observableThrowError(errMsg);
    }
}
