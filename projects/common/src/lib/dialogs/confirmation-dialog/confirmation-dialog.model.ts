export class ConfirmationDialogConfig {
    type?: string = ''; // primary | warn | accent
    icon: string = '';
    iconType?: string = 'fa'; // fa | material
    title: string = '';
    message: string = '';
    yesBtnText?: string = 'Yes';
    noBtnText?: string = 'No';
}