import { SerializedAction } from "./serialize";

export type BackgroundAction = {
  type: "background";
  url: string;
  parentAnimation: string;
  imageAnimation: string;
};

export type ForegroundAction = {
  type: "foreground";
  url: string;
  parentAnimation: string;
  imageAnimation: string;
};

export type FigureAction = {
  type: "figure";
  url: string;
  identity: string;
  size: string;
  position: string;
};

export type RemoveFigureAction = {
  type: "remove-figure";
  identity: string;
};

export type TextAction = {
  type: "text";
  text: string;
  name: string;
  vocal: string;
};

export type BackgroundMusicAction = {
  type: "bgm";
  url: string;
};

export type SoundEffectAction = {
  type: "sfx";
  url: string;
};

export type SelectAction = {
  type: "select";
  options: string[];
};

export type WaitAction = {
  type: "wait";
  time: number;
};

export type ConsoleAction = {
  type: "console";
  visible: boolean;
};

export type Action =
  | BackgroundAction
  | ForegroundAction
  | FigureAction
  | RemoveFigureAction
  | SoundEffectAction
  | TextAction
  | SelectAction
  | BackgroundMusicAction
  | WaitAction
  | ConsoleAction;

export interface AudioContext {
  bgm: {
    /** change BGM track, this will fade out previous track before change to new one */
    change(url: string): Promise<HTMLAudioElement>;
    /** instant play track */
    play(): void;
    /** instant pause track */
    pause(): void;
    /** instant mute track */
    mute(): void;
    /** instant unmute track */
    unmute(): void;
    /** fade in volume */
    fadeIn(time?: number): void;
    /** fade out volume */
    fadeOut(time?: number): void;
  };
  sfx: {
    /** play sound effect */
    play(url: string): Promise<HTMLAudioElement>;
  };
}

export type StoryContext = {
  selection: number;
  audio: AudioContext;
  preload: (url: string, as: string) => void;
};

export type StoryGenerator = Generator<SerializedAction, void, void>;

export type Story = (ctx: StoryContext) => StoryGenerator;
