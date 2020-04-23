module.exports = {
  name: 'create-clown-component',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/create-clown-component',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
