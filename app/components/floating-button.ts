import { Observable, Screen, Utils } from '@nativescript/core';
import * as clipboard from '@nativescript/clipboard';

export class FloatingButtonModel extends Observable {
    private _isPopupVisible = false;
    private _prompt = '';
    private _generatedText = '';
    public screenWidth = Screen.mainScreen.widthDIPs;
    public screenHeight = Screen.mainScreen.heightDIPs;

    constructor() {
        super();
    }

    get isPopupVisible(): boolean {
        return this._isPopupVisible;
    }

    set isPopupVisible(value: boolean) {
        if (this._isPopupVisible !== value) {
            this._isPopupVisible = value;
            this.notifyPropertyChange('isPopupVisible', value);
        }
    }

    get prompt(): string {
        return this._prompt;
    }

    set prompt(value: string) {
        if (this._prompt !== value) {
            this._prompt = value;
            this.notifyPropertyChange('prompt', value);
        }
    }

    get generatedText(): string {
        return this._generatedText;
    }

    set generatedText(value: string) {
        if (this._generatedText !== value) {
            this._generatedText = value;
            this.notifyPropertyChange('generatedText', value);
        }
    }

    togglePopup() {
        this.isPopupVisible = !this.isPopupVisible;
    }

    async generateText() {
        if (!this.prompt) return;
        
        // Simulate AI response for now
        // In production, integrate with actual OpenAI API
        this.generatedText = `Generated text based on: ${this.prompt}`;
        this.prompt = '';
    }

    copyToClipboard() {
        if (this.generatedText) {
            clipboard.setText(this.generatedText);
            // Optional: Show toast or feedback
            Utils.toast('Copied to clipboard');
        }
    }
}