'use client';

import { BrutalistLink,SectionTitle } from '../components';

export default function AmazonAnalysisPage() {
  return (
    <div className="max-w-3xl mx-auto py-32 px-4">
      <header className="mb-16">
        <p className="font-mono text-sm uppercase text-gray-600 mb-2">Data Analyst / Python & Looker Studio</p>
        <h1 className="text-5xl md:text-6xl font-bold font-display leading-tight">Amazon Sales Data Analysis</h1>
      </header>
      <article className="text-lg leading-relaxed text-gray-800 space-y-4">
        
        <SectionTitle>Overview</SectionTitle>
       <p>
          This group project was part of the Dibimbing bootcamp curriculum. My team and I explored sales data from Amazon to uncover key business insights. My specific focus was on <strong>data cleaning</strong>, <strong>normalization</strong>, and <strong>building the ERD</strong>. I&apos;m proud to share that this assignment earned a <strong>perfect score of 100/100</strong>.
        </p>

        <SectionTitle>My Role & Tools Used</SectionTitle>
        <ul className="list-disc pl-5 space-y-2">
          <li>Cleaned raw Excel data using Python (pandas + openpyxl).</li>
          <li>Normalized data into five structured tables: <code>category</code>, <code>product</code>, <code>order</code>, <code>shipping</code>, and <code>order_item</code>.</li>
          <li>Collaborated on identifying key metrics and building dashboards in Looker Studio.</li>
          <li>Worked with teammates to align on the final presentation and storytelling.</li>
        </ul>

        <SectionTitle>Data Cleaning & Normalization Script</SectionTitle>
        <div className="overflow-auto text-sm font-mono bg-gray-100 p-4 border-2 border-text">
          <pre className='whitespace-pre-wrap'>
{`import pandas as pd

file_path = 'Amazon Sale Report.xlsx'
df = pd.read_excel(file_path, sheet_name="Amazon Sale Report")

# Data Cleaning
df.columns = df.columns.str.strip().str.lower().str.replace(" ", "_").str.replace("-", "_")
df['promotion_ids'] = df['promotion_ids'].fillna("None")
df['b2b'] = df['b2b'].fillna(False)

# Normalization: Category Table
category_df = df[['category']].drop_duplicates().reset_index(drop=True)
category_df['category_id'] = category_df.index + 1

# Normalization: Product Table
product_df = df[['sku', 'style', 'category']].drop_duplicates()
product_df = product_df.merge(category_df, on='category', how='left')

# Normalization: OrderItem Table
order_item_df = df[['order_id', 'sku', 'qty', 'amount', 'currency']]
order_item_df['order_item_id'] = order_item_df.index + 1

# Normalization: Order Table
order_totals = order_item_df.groupby('order_id')['amount'].sum().reset_index()
order_df = df[['order_id', 'date', 'status', 'sales_channel', 'fulfilment', 'ship_service_level', 'promotion_ids', 'b2b']].drop_duplicates()
order_df = order_df.merge(order_totals, on='order_id', how='left')

# Normalization: Shipping Table
shipping_df = df[['order_id', 'ship_city', 'ship_state', 'ship_postal_code', 'ship_country']].drop_duplicates()
`}
          </pre>
        </div>

        <SectionTitle>Key Findings & Dashboard</SectionTitle>
        <p>
          Our dashboard in Looker Studio revealed trends across product categories, top-performing SKUs, regional sales patterns, and pricing anomalies. These insights helped highlight promotional effectiveness and potential process gaps.
        </p>
        <BrutalistLink href="/1748443932326-Assignment-Day-14-Menganalisis-Design-Data-Warehouse-dan-Implementasinya.pdf">
          → View Final Report (PDF)
        </BrutalistLink>

      </article>
    </div>
  );
}