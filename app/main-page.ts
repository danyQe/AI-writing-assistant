import { EventData, Page, Builder } from '@nativescript/core';
import { FloatingButtonModel } from './components/floating-button';

export function navigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = new FloatingButtonModel();
}

export function onFloatingButtonLoaded(args: EventData) {
    const contentView = args.object;
    const floatingButton = Builder.load({
        path: '~/components/floating-button',
        name: 'floating-button'
    });
    contentView.content = floatingButton;
}