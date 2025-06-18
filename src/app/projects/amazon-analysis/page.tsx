// app/projects/amazon-analysis/page.tsx

'use client';

import Link from 'next/link';

export default function AmazonAnalysisPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 text-black bg-white font-sans space-y-16">
      {/* Title */}
      <section className="space-y-2">
        <h1 className="text-4xl font-bold">Amazon Sales Data Analysis</h1>
        <p className="text-sm text-gray-500 uppercase font-mono">Data Analyst / Python & Looker Studio</p>
      </section>

      {/* Overview */}
      <section>
        <h2 className="text-2xl font-bold font-mono mb-4">Overview</h2>
        <p className="text-base leading-relaxed">
          This group project was part of Dibimbing bootcamp curriculum. Together with my peers, we explored sales data from Amazon to uncover key business insights. My focus was on <strong>data cleaning</strong>, <strong>normalization</strong>, and <strong>building the ERD</strong>.Im proud to share that this assignment earned a <strong>perfect score of 100/100</strong>.
        </p>
      </section>

      {/* Collaboration & Tools */}
      <section>
        <h2 className="text-2xl font-bold font-mono mb-4">My Role & Tools Used</h2>
        <ul className="list-disc pl-6 text-base space-y-2">
          <li>Cleaned raw Excel data using Python (pandas + openpyxl)</li>
          <li>Normalized data into five structured tables: <code>category</code>, <code>product</code>, <code>order</code>, <code>shipping</code>, and <code>order_item</code></li>
          <li>Collaborated on identifying key metrics and building dashboards in Looker Studio</li>
          <li>Worked with teammates to align on final presentation and storytelling</li>
        </ul>
      </section>

      {/* Python Code */}
      <section>
        <h2 className="text-2xl font-bold font-mono mb-4">Data Cleaning & Normalization Script</h2>
        <div className="overflow-auto text-sm font-mono bg-gray-100 p-4 rounded">
          <pre>
{`import pandas as pd

file_path = 'Amazon Sale Report.xlsx'
usecols = ["Order ID", "Date", "Status", "Sales Channel", "Fulfilment", "ship-service-level", "Style", "SKU", "Category", "Qty", "currency", "Amount", "ship-city", "ship-state", "ship-postal-code", "ship-country", "promotion-ids", "B2B"]

df = pd.read_excel(file_path, sheet_name="Amazon Sale Report", usecols=usecols, engine="openpyxl")

df.columns = df.columns.str.strip().str.lower().str.replace(" ", "_").str.replace("-", "_")
df['promotion_ids'] = df['promotion_ids'].fillna("None")
df['ship_service_level'] = df['ship_service_level'].fillna("Unknown")
df['b2b'] = df['b2b'].fillna(False)

category_df = df[['category']].drop_duplicates().reset_index(drop=True)
category_df['category_id'] = category_df.index + 1

product_df = df[['sku', 'style', 'category']].drop_duplicates().reset_index(drop=True)
product_df = product_df.merge(category_df, on='category', how='left')

order_item_df = df[['order_id', 'sku', 'qty', 'amount', 'currency']]
order_item_df['suspicious'] = (order_item_df['qty'] == 0) & (order_item_df['amount'] > 0)
order_item_df['order_item_id'] = order_item_df.index + 1

order_totals = order_item_df.groupby('order_id')['amount'].sum().reset_index()
order_totals.rename(columns={'amount': 'total_amount'}, inplace=True)

order_df = df[['order_id', 'date', 'status', 'sales_channel', 'fulfilment', 'ship_service_level', 'promotion_ids', 'b2b']].drop_duplicates()
order_df = order_df.merge(order_totals, on='order_id', how='left')

shipping_df = df[['order_id', 'ship_city', 'ship_state', 'ship_postal_code', 'ship_country']].drop_duplicates()

with pd.ExcelWriter("normalize_data_pm_python_ver_3.xlsx", engine="openpyxl") as writer:
    category_df.to_excel(writer, sheet_name="category", index=False)
    product_df.to_excel(writer, sheet_name="product", index=False)
    order_df.to_excel(writer, sheet_name="order", index=False)
    shipping_df.to_excel(writer, sheet_name="shipping", index=False)
    order_item_df.to_excel(writer, sheet_name="order_item", index=False)
`}
          </pre>
        </div>
      </section>

      {/* Insights & Presentation */}
      <section>
        <h2 className="text-2xl font-bold font-mono mb-4">Key Findings & Dashboard</h2>
        <p>
          Our dashboard in Looker Studio revealed trends across product categories, top-performing SKUs, regional sales patterns, and pricing anomalies. These insights helped highlight promotional effectiveness and potential process gaps.
        </p>
        <Link
          href="/1748443932326-Assignment-Day-14-Menganalisis-Design-Data-Warehouse-dan-Implementasinya.pdf"
          target="_blank"
          className="inline-block mt-4 px-6 py-2 border border-black font-mono text-sm rounded hover:bg-black hover:text-white transition"
        >
          → View Final Report (PDF)
        </Link>
      </section>

      {/* Navigation */}
      <section>
        <Link
          href="/"
          className="inline-block mt-10 px-6 py-2 border border-black font-mono text-sm rounded hover:bg-black hover:text-white transition"
        >
          ← Back to Homepage
        </Link>
      </section>
    </main>
  );
}
