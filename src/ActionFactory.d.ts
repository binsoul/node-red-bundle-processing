import type { Action } from './Action';
import type { Message } from './Message';

/**
 * Builds an {@link Action} for a {@link Message}.
 */
export interface ActionFactory {
    build: (message: Message) => Action | Array<Action> | null;
}
