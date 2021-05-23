import { AbstractControl } from '@angular/forms';
export class UserValidator {

    static cannotHaveNumbers(control: AbstractControl) {

        if (control.value.includes(1, 2, 3, 4, 5, 6, 7, 8, 9, 0)) {
            return {
                cannotHaveNumbers: true
            }
        }
        return null;

    }

    static cannotHaveSpace(control: AbstractControl) {
        if (control.value.includes(" ")) {
            return {
                cannotHaveSpace: true
            }
        }
        return null;
    }

    // static cannotHaveSpecialCharacters(control: AbstractControl) {
    //     if (control.value.includes((/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/))) {
    //         return {
    //             cannotHaveSpecialCharacters: true
    //         }
    //     }
    //     return null;
    // }
}
