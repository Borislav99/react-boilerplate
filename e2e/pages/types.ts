import type {Locator} from '@playwright/test';

export interface AssertMatchesSnapshotArgs {
  element: Locator;
  mask?: [Locator];
}
