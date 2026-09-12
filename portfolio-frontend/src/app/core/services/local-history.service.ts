import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalHistoryService {
  private storageKey = 'recently-watched';
  private maxItems = 20;

  getHistory(): string[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  addToHistory(itemId: string): void {
    const history = this.getHistory();
    // Remove if already exists to avoid duplicates
    const index = history.indexOf(itemId);
    if (index !== -1) {
      history.splice(index, 1);
    }
    history.unshift(itemId);
    if (history.length > this.maxItems) {
      history.splice(this.maxItems);
    }
    localStorage.setItem(this.storageKey, JSON.stringify(history));
  }

  clearHistory(): void {
    localStorage.removeItem(this.storageKey);
  }
}
