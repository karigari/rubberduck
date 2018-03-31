import GithubPathAdapter from "./github/path";
import BitbucketPathAdapter from "./bitbucket/path";
import * as GithubTreeAdapter from "./github/tree";
import * as BitbucketTreeAdapter from "./bitbucket/tree";
import {
  getListener as githubListener,
  getReader as githubReader
} from "./github/views";
import {
  getListener as bitbucketListener,
  getReader as bitbucketReader
} from "./bitbucket/views";

export const getGitService = () => window.location.host.split(".")[0];

const pathAdapterMap = {
  github: GithubPathAdapter,
  bitbucket: BitbucketPathAdapter
};

const treeAdapterMap = {
  github: GithubTreeAdapter,
  bitbucket: BitbucketTreeAdapter
};

const pageListenerMap = {
  github: githubListener,
  bitbucket: bitbucketListener
};

const pageReaderMap = {
  github: githubReader,
  bitbucket: bitbucketReader
};

export const pathAdapter = pathAdapterMap[getGitService()];
export const treeAdapter = treeAdapterMap[getGitService()];
export const getPageListener = pageListenerMap[getGitService()];
export const getPageReader = pageReaderMap[getGitService()];
