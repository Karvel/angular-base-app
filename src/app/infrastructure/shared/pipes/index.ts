import { FormErrorPipe } from './form-error.pipe';
import { SafeHTMLPipe } from './safe-html.pipe';

/**
 * Add pipes that do not need to be specifically referenced.
 */
export const pipes = [FormErrorPipe, SafeHTMLPipe];
