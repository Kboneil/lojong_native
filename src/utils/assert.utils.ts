import assert from 'assert';

function assertDependecies(
  args: any,
  requiredFields: string[],
  className: string,
  methodName: string
) {
  assert.notEqual(
    null,
    args,
    'Assertion Fail @ ' + className + '#' + methodName + ': No args.'
  );

  requiredFields.forEach(field => {
    assert.notEqual(
      null,
      args,
      'Assertion Fail @ ' + className + '#' + methodName + ': No ' + field + '.'
    );
  });
}

export default assertDependecies;
