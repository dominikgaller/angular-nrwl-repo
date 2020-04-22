module.exports = {
  name: 'clown-management-system',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/clown-management-system',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
