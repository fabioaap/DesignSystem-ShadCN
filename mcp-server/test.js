#!/usr/bin/env node

/**
 * Test script for the MCP server
 * Verifies all tools and functionality
 */

import { handleListComponents, handleGetComponentInfo, handleGetComponentCode, handleGenerateUsageExample, handleSearchComponents } from './dist/tools.js';

let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    console.log(`✓ ${name}`);
    passed++;
  } catch (error) {
    console.error(`✗ ${name}`);
    console.error(`  Error: ${error.message}`);
    failed++;
  }
}

console.log('🧪 Running MCP Server Tests\n');

// Test 1: List components
test('list_components returns 4 components', () => {
  const result = handleListComponents();
  const components = JSON.parse(result);
  if (components.length !== 4) {
    throw new Error(`Expected 4 components, got ${components.length}`);
  }
  if (!components.find(c => c.name === 'Button')) {
    throw new Error('Button component not found');
  }
});

// Test 2: Get component info
test('get_component_info returns Button details', () => {
  const result = handleGetComponentInfo({ name: 'Button' });
  const info = JSON.parse(result);
  if (info.name !== 'Button') {
    throw new Error('Component name mismatch');
  }
  if (!info.variants || !info.variants.variant) {
    throw new Error('Missing variants');
  }
  if (info.props.length === 0) {
    throw new Error('Missing props');
  }
});

// Test 3: Get component info for all components
['Button', 'Card', 'Input', 'Label'].forEach(componentName => {
  test(`get_component_info works for ${componentName}`, () => {
    const result = handleGetComponentInfo({ name: componentName });
    const info = JSON.parse(result);
    if (info.name !== componentName) {
      throw new Error(`Expected ${componentName}, got ${info.name}`);
    }
  });
});

// Test 4: Get component code
test('get_component_code returns Button source', () => {
  const result = handleGetComponentCode({ name: 'Button' });
  if (!result.includes('const Button')) {
    throw new Error('Button source code not found');
  }
  if (!result.includes('typescript')) {
    throw new Error('Code block formatting missing');
  }
});

// Test 5: Generate usage examples
test('generate_usage_example for Button with variant', () => {
  const result = handleGenerateUsageExample({ 
    name: 'Button', 
    variant: 'destructive' 
  });
  if (!result.includes('variant="destructive"')) {
    throw new Error('Variant not in example');
  }
});

test('generate_usage_example for Button with size', () => {
  const result = handleGenerateUsageExample({ 
    name: 'Button', 
    size: 'lg' 
  });
  if (!result.includes('size="lg"')) {
    throw new Error('Size not in example');
  }
});

test('generate_usage_example for Card with props', () => {
  const result = handleGenerateUsageExample({ 
    name: 'Card',
    props: {
      title: 'Test Card',
      description: 'Test description'
    }
  });
  if (!result.includes('Test Card')) {
    throw new Error('Title not in example');
  }
});

test('generate_usage_example for Input', () => {
  const result = handleGenerateUsageExample({ 
    name: 'Input',
    props: {
      type: 'email',
      placeholder: 'test@example.com'
    }
  });
  if (!result.includes('type="email"')) {
    throw new Error('Type not in example');
  }
});

// Test 6: Search components
test('search_components finds Button by name', () => {
  const result = handleSearchComponents({ query: 'button' });
  const data = JSON.parse(result);
  if (data.count === 0) {
    throw new Error('No results found');
  }
  if (!data.results.find(r => r.name === 'Button')) {
    throw new Error('Button not in results');
  }
});

test('search_components finds form components', () => {
  const result = handleSearchComponents({ query: 'form' });
  const data = JSON.parse(result);
  if (data.count < 2) {
    throw new Error('Expected multiple form components');
  }
});

test('search_components by variant', () => {
  const result = handleSearchComponents({ query: 'destructive' });
  const data = JSON.parse(result);
  if (data.count === 0) {
    throw new Error('No results for destructive variant');
  }
});

// Test 7: Error handling
test('get_component_info throws for invalid component', () => {
  try {
    handleGetComponentInfo({ name: 'InvalidComponent' });
    throw new Error('Should have thrown error');
  } catch (error) {
    if (!error.message.includes('not found')) {
      throw new Error('Wrong error message');
    }
  }
});

test('search_components handles empty query', () => {
  try {
    handleSearchComponents({ query: '' });
    throw new Error('Should have thrown error');
  } catch (error) {
    if (!error.message.includes('empty')) {
      throw new Error('Wrong error message');
    }
  }
});

// Summary
console.log('\n' + '='.repeat(50));
console.log(`Tests passed: ${passed}`);
console.log(`Tests failed: ${failed}`);
console.log('='.repeat(50));

if (failed > 0) {
  process.exit(1);
} else {
  console.log('\n✅ All tests passed!');
}
