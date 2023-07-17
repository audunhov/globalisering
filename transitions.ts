interface Transition {
  "enter-from-class"?: string;
  "enter-active-class"?: string;
  "enter-to-class"?: string;
  "leave-from-class"?: string;
  "leave-active-class"?: string;
  "leave-to-class"?: string;
}

export const slideFromRight: Transition = {
  "enter-from-class": "translate-x-full",
  "enter-active-class": "transition-all",
  "enter-to-class": "translate-x-0",
  "leave-from-class": "translate-x-0",
  "leave-active-class": "transition-all",
  "leave-to-class": "translate-x-full",
};
