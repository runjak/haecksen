import { $ } from "zx";

const getDate = (): string => {
  const isoString = new Date().toISOString();
  return isoString.replaceAll(":", "").replaceAll(".", "");
};

const remote = "origin";
const deployBranch = "pages";
const tmpBranch = `haecksen-build_${getDate()}`;
const tmp = `/tmp/${tmpBranch}`;

console.log(`🌳 creating worktree in '${tmp}'`);
await $`git worktree add -f --no-checkout ${tmp}`;

console.log("📝 copying files");
await $`cp -rv ./dist/* ${tmp}`;
await $`git -C ${tmp} add .`;
await $`git -C ${tmp} commit -m 'Update pages'`;

console.log(`🔄 updating branch '${deployBranch}'`);
await $`git -C ${tmp} branch -f ${deployBranch} ${tmpBranch}`;
await $`git worktree remove ${tmpBranch}`;
await $`git branch -D ${tmpBranch}`;

console.log("🚀 publishing");
await $`git push ${remote} --force-with-lease ${deployBranch}:${deployBranch}`;
