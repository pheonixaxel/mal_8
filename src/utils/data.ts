import Web from "../../public/svgs/options/Web.svg";
import Academic from "../../public/svgs/options/Academic.svg";
import Writing from "../../public/svgs/options/Writing.svg";
import Youtube from "../../public/svgs/options/Youtube.svg";
import Reddit from "../../public/svgs/options/Reddit.svg";
import Stackoverflow from "../../public/svgs/options/Stackoverflow.svg";

export const focusOptions = [
  {
    website: "All",
    icon: Web,
    query: "only reply in da-DK",
    description: "Search across the entire internet only reply in da-DK",
  },
  {
    website: "Academic",
    icon: Academic,
    query: "site:arxiv.org",
    description: "Search in published academic papers",
  },
  {
    website: "Writing",
    icon: Writing,
    query: "",
    description: "Generate text without searching the web",
  },
  {
    website: "Youtube",
    icon: Youtube,
    query: "site:youtube.com",
    description: "Discover and watch videos on YouTube",
  },
  {
    website: "Reddit",
    icon: Reddit,
    query: "site:reddit.com",
    description: "Search for discussions and opinions online",
  },
  {
    website: "Stackoverflow",
    icon: Stackoverflow,
    query: "site:stackoverflow.com",
    description: "Get answers to your programming questions",
  },
];

export const MODELS = [
  { label: "gpt-4-turbo-preview", value: "gpt-4-turbo-preview" },
  { label: "gpt-4-1106-review", value: "gpt-4-1106-review" },
  { label: "gpt-4-0613", value: "gpt-4-0613" },
  { label: "gpt-4-0125-preview", value: "gpt-4-0125-preview" },
  { label: "gpt-4", value: "gpt-4" },
  { label: "gpt-3.5-turbo-16k-0613", value: "gpt-3.5-turbo-16k-0613" },
  { label: "gpt-3.5-turbo-16k", value: "gpt-3.5-turbo-16k" },
  { label: "gpt-3.5-turbo-1106", value: "gpt-3.5-turbo-1106" },
  { label: "gpt-3.5-turbo-0613", value: "gpt-3.5-turbo-0613" },
  { label: "gpt-3.5-turbo-0301", value: "gpt-3.5-turbo-0301" },
  { label: "gpt-3.5-turbo-0125", value: "gpt-3.5-turbo-0125" },
  { label: "gpt-3.5-turbo", value: "gpt-3.5-turbo" },
];
