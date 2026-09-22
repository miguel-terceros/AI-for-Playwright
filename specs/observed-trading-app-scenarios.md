# Observed trading app scenarios

## Application Overview

Black-box exploratory test plan for the stock trading app at http://localhost:3000/index.html. Focus on the visible catalog, trade form, empty portfolio state, analytics view, and input behavior without inspecting source code.

## Test Scenarios

### 1. Trade and analytics behavior

**Seed:** `tests/seed.spec.ts`

#### 1.1. Trade page shows stock catalog and default portfolio state

**File:** `tests/trade-app/observed-trade-page.spec.ts`

**Steps:**
  1. Open http://localhost:3000/index.html
    - expect: The page title is Trade.
    - expect: The navigation shows Trade and Analytics links.
    - expect: The stock list contains multiple symbols and names such as MSFT, GOOGL, AMZN, AAPL, and META.
    - expect: The portfolio area shows Cash: $10000.00 with an empty holdings table.
  2. Do not select a stock
    - expect: No trade form is shown before a stock is chosen.
    - expect: The portfolio remains empty at startup.

#### 1.2. Selecting a stock reveals the trade form

**File:** `tests/trade-app/observed-stock-selection.spec.ts`

**Steps:**
  1. Click MSFT: Microsoft in the stock list
    - expect: The detail panel updates to show MSFT: Microsoft.
    - expect: The market price is visible for the selected stock.
    - expect: The form exposes Limit Price, Quantity, and Value fields.
    - expect: The Buy and Sell buttons are visible.
  2. Review the selected state
    - expect: The chosen stock is the active one being traded.
    - expect: The displayed values correspond to the selected stock and not another ticker.

#### 1.3. Buying a valid quantity creates a portfolio action

**File:** `tests/trade-app/observed-buy-flow.spec.ts`

**Steps:**
  1. Select MSFT: Microsoft
    - expect: The stock detail panel for MSFT is visible.
  2. Enter a valid limit price and quantity
    - expect: The fields accept valid numbers without an obvious validation error.
  3. Click Buy
    - expect: The trade is submitted.
    - expect: The UI responds without breaking the form or leaving the page in an inconsistent state.
    - expect: The portfolio/cash state updates as the app expects after a buy.

#### 1.4. Selling a valid quantity updates the position

**File:** `tests/trade-app/observed-sell-flow.spec.ts`

**Steps:**
  1. Select a stock and create or ensure a valid position exists
    - expect: The stock detail form is available.
  2. Enter a valid quantity for the position
    - expect: The sell form accepts the value.
  3. Click Sell
    - expect: The sell action is submitted.
    - expect: The portfolio reflects the reduced holdings or empty position as appropriate.
    - expect: The cash value updates according to the sale.

#### 1.5. Analytics matches the empty-state portfolio behavior

**File:** `tests/trade-app/observed-analytics-flow.spec.ts`

**Steps:**
  1. Open the Analytics page from the app navigation
    - expect: The analytics view loads and reports that the portfolio is empty.
    - expect: The summary remains consistent with the empty portfolio state.
  2. Return to the Trade page
    - expect: The app returns to the trading screen correctly.
    - expect: The empty-state portfolio remains consistent after navigation.

#### 1.6. Input validation rejects incomplete or invalid trade values

**File:** `tests/trade-app/observed-validation.spec.ts`

**Steps:**
  1. Select a stock then leave required fields blank or invalid
    - expect: The app blocks the order or shows a validation message instead of accepting invalid data.
  2. Submit a zero, negative, or mismatched quantity or price
    - expect: The form rejects the invalid data.
    - expect: The page stays usable so the user can correct the entry.
