import os

# Define the range of chapters (6 to 50)
start_chapter = 1
end_chapter = 28

# Create empty files for each chapter
for chapter in range(start_chapter, end_chapter + 1):
    # Define the filename
    filename = f"matthew_chapter{chapter}.ts"

    # Create an empty file
    with open(filename, "w", encoding="utf-8") as f:
        pass  # No content written

    print(f"✅ Created {filename}")

print(f"✅ Done! Generated empty files from genesis_chapter{start_chapter}.ts to genesis_chapter{end_chapter}.ts.")