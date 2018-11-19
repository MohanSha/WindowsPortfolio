import { BrowserComponent } from './browser';
import { ConsoleComponent } from './console';
import { FileExplorerComponent } from './file-explorer/file-explorer.component';
import { TestProgram } from './test-program/test-program.component';

export let ProgramDefinitions = [ // positionOnLastClose set by windodw
  {
    component: ConsoleComponent,
    id: 'console',
    icon: './assets/programs/console/terminal-icon.png',
    name: 'Console',
    openOnStart: true,
    pin: {
      desktop: true,
      taskbar: true
    },
    unique: false
  },
  {
    component: FileExplorerComponent,
    id: 'file-explorer',
    icon: './assets/programs/file-explorer/folder-icon.png',
    name: 'File Explorer',
    openOnStart: false,
    pin: {
      desktop: true,
      taskbar: true
    },
    unique: false
  },
  {
    component: BrowserComponent,
    id: 'browser',
    icon: './assets/programs/browser/browser.png',
    name: 'Browser',
    openOnStart: false,
    pin: {
      desktop: true,
      taskbar: true
    },
    unique: false
  }
];
