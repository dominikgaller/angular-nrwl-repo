module.exports = {
  name: 'clown-api-model',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/clown/api/model',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
