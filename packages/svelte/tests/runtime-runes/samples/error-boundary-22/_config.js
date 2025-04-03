import { flushSync } from 'svelte';
import { test } from '../../test';

export default test({
	html: '',
	mode: ['client'],
	test({ assert, target }) {
		assert.equal(target.textContent, `error`);
	}
});
