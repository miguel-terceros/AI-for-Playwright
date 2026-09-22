# Trade app exploratory test plan

## Application Overview

Exploratory QA plan for the stock trading app reachable at http://localhost:3000/index.html. The plan focuses on visible user flows, selection states, portfolio behavior, validation of input controls, and navigation between Trade and Analytics views.

## Test Scenarios

### 1. Trade and analytics flows

**Seed:** `tests/seed.spec.ts`

#### 1.1. Trade page loads with stock catalog and empty portfolio

**File:** `tests/trade-app/trade-page-loads.spec.ts`

**Steps:**
  1. Open http://localhost:3000/index.html
    - expect: The page title is Trade.
    - expect: The navigation shows Trade and Analytics links.
    - expect: The page lists stock choices including MSFT, GOOGL, AMZN, AAPL, META, WMT, JPM, V, JNJ, ORCL, and ABBV.
    - expect: The portfolio section shows Cash: $10000.00 and an empty holdings table.
  2. Review the default page without selecting a stock
    - expect: No trade form is visible in the main content area before a stock is selected.
    - expect: The portfolio table remains empty with no holding rows.

#### 1.2. Select a stock and view trade form

**File:** `tests/trade-app/select-stock.spec.ts`

**Steps:**
  1. From the stock list, click MSFT: Microsoft
    - expect: The detail panel updates to show MSFT: Microsoft.
    - expect: The market price displays as $350.
    - expect: The form includes Limit Price, Quantity, and Value fields.
    - expect: The Buy and Sell buttons are visible.
  2. Verify the selected stock remains highlighted or is otherwise clearly presented as active
    - expect: The chosen stock is the one currently being traded.
    - expect: The text and values in the form correspond to the selected stock, not another symbol.

#### 1.3. Buy flow with valid input

**File:** `tests/trade-app/buy-flow.spec.ts`

**Steps:**
  1. Select MSFT: Microsoft
    - expect: The form is visible for MSFT, with a market price of $350.
  2. Enter a valid limit price such as 355
    - expect: The Limit Price field accepts the value without error.
  3. Enter a quantity such as 2
    - expect: The Quantity field accepts the value without error.
  4. Enter a matching value or leave the value field as the system calculates it, if the UI supports it
    - expect: The user can complete the purchase details without a blocking validation error.
  5. Click Buy
    - expect: A successful purchase outcome is shown if the app accepts the transaction.
    - expect: The portfolio updates to include the purchased stock or reflects the new cash total.
    - expect: The transaction does not clear the page unexpectedly or leave the app in a broken state.

#### 1.4. Sell flow with valid input

**File:** `tests/trade-app/sell-flow.spec.ts`

**Steps:**
  1. Select a stock that is already in the portfolio, or create one through a buy action first
    - expect: The selected stock’s details and action controls are available.
  2. Enter a valid quantity for the position
    - expect: The quantity field accepts a realistic sell amount.
  3. Click Sell
    - expect: The sell action is invoked successfully.
    - expect: The portfolio reflects the reduced quantity or zeroed position as appropriate.
    - expect: The cash balance is updated to reflect a sale if the application supports it.
  4. Check the portfolio table after the sale
    - expect: The holdings table is refreshed with correct values for quantity, average price, and total value.
    - expect: The page remains stable and usable after the transaction.

#### 1.5. Validate empty-state and portfolio behavior

**File:** `tests/trade-app/portfolio-empty-state.spec.ts`

**Steps:**
  1. Open the app from a fresh state
    - expect: The portfolio section shows Cash: $10000.00.
    - expect: No rows appear under the heading table for holdings.
  2. Navigate to Analytics
    - expect: The analytics page shows Your portfolio is currently empty.
    - expect: The portfolio summary remains consistent with the empty holdings state.
  3. Return to Trade and open a stock
    - expect: The empty state is still represented correctly before any trade is executed.
    - expect: The app remains usable across navigation between views.

#### 1.6. Invalid input and boundary validation

**File:** `tests/trade-app/input-validation.spec.ts`

**Steps:**
  1. Select MSFT: Microsoft
    - expect: The trade form is displayed.
  2. Leave Limit Price empty and attempt an order
    - expect: The app blocks the action and shows a validation message or prevents submission.
    - expect: The user remains on the same form and can fix the field.
  3. Enter a quantity of 0 or a negative value
    - expect: The app either rejects the quantity or shows a clear validation error.
    - expect: No invalid trade is accepted.
  4. Enter a value that does not match the expected order total or is blank when required
    - expect: The form shows an error or prevents the order from processing.
    - expect: The app does not silently accept inconsistent order data.
  5. Try to submit with invalid values for both quantity and price
    - expect: The validation covers all required fields, not just one field at a time.
    - expect: The page remains responsive and the user can correct the issue.

#### 1.7. Navigation and state consistency between Trade and Analytics

**File:** `tests/trade-app/navigation-state.spec.ts`

**Steps:**
  1. Open Trade and select a stock
    - expect: The stock detail panel is visible and matches the selected symbol.
  2. Click Analytics
    - expect: The analytics page loads with the correct empty-state message or portfolio summary depending on the current holdings.
  3. Return to Trade
    - expect: The app restores the Trade view correctly.
    - expect: No stale form state or incorrect portfolio state persists across navigation.
  4. Repeat the navigation with a completed trade in the portfolio, if applicable
    - expect: The analytics screen reflects the same holdings and cash values shown on the Trade view.
    - expect: No mismatch appears between pages after navigation.


Results
  - somewhat superficial
  - missing cases...
  - time spent reviewing vs. time testing myselft