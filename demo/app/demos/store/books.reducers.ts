export interface BooksState {
  loading: boolean;
  books: any[];
  error: any;
}

export const initialState: BooksState = {
  loading: false,
  books: [],
  error: null
};

export class SearchBooksAction {
  constructor(public query: string) {}
}

export class SearchBooksCompleteAction {
  constructor(public books: any[]) {}
}

export class SearchBooksErrorAction {
  constructor(public error: any) {}
}

export function reducer(state = initialState, action: SearchBooksAction | SearchBooksCompleteAction | SearchBooksErrorAction) {
  if (action instanceof SearchBooksAction) {
    return {
      loading: true,
      books: [...state.books],
      error: null
    };
  } else if (action instanceof SearchBooksCompleteAction) {
    return {
      loading: false,
      books: [...action.books],
      error: null
    };
  } else if (action instanceof SearchBooksErrorAction) {
    return {
      loading: false,
      books: [],
      error: action.error
    };
  }
  return state;
}

export const BOOKS_REDUCERS = {
  books: reducer
};
