enum ECloneType {
  DC1 = "dc1",
  DC2 = "dc2",
}

const shallowClone = <T>(obj: T, type: ECloneType = ECloneType.DC1): T => {
  return type === ECloneType.DC1 ? Object.assign({}, obj) : { ...obj };
};

const objShallow = { user: { role: "admin" } };
const cloneObjShallow = shallowClone(objShallow);

cloneObjShallow.user.role = "user";
console.log(objShallow);
console.log(cloneObjShallow);
