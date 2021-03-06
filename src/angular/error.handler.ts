import { ErrorHandler, Inject } from '@angular/core';
import { Sentry } from '../';
import { SentryConfig } from "./";

export class SentryErrorHandler extends ErrorHandler {
    constructor() {
        super(false);
    }
    
    handleError(err: any): void {
        super.handleError(err);
        try {
            Sentry.capture(err);
        } catch (e) {
            console.log('[Sentry - SentryErrorHandler]', e);
        }
        throw err;
    }
}