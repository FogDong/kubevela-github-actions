"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneRepo = void 0;
const exec_1 = require("@actions/exec");
async function cloneRepo({ token, owner, repo }) {
    await exec_1.exec('git', ['clone', `https://x-access-token:${token}@github.com/${owner}/${repo}.git`]);
    await exec_1.exec('git', ['config', '--global', 'user.email', 'kubevela.bot@aliyun.com']);
    await exec_1.exec('git', ['config', '--global', 'user.name', 'kubevela-bot']);
}
exports.cloneRepo = cloneRepo;
//# sourceMappingURL=git.js.map