import os
from pathlib import Path
from datetime import datetime

def scan_directory_and_save(directory_path, output_file='directory_structure.txt'):
    """
    Рекурсивно сканирует директорию и сохраняет структуру в текстовый файл
    
    Параметры:
        directory_path: путь к директории для сканирования
        output_file: имя выходного файла (по умолчанию directory_structure.txt)
    """
    
    directory = Path(directory_path)
    
    if not directory.exists():
        print(f"Ошибка: директория {directory_path} не существует")
        return
    
    if not directory.is_dir():
        print(f"Ошибка: {directory_path} не является директорией")
        return
    
    # Собираем информацию о файловой структуре
    structure = []
    file_count = 0
    folder_count = 0
    total_size = 0
    
    structure.append("=" * 80)
    structure.append(f"СКАНИРОВАНИЕ ДИРЕКТОРИИ: {directory.absolute()}")
    structure.append(f"Дата и время: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    structure.append("=" * 80)
    structure.append("")
    
    # Рекурсивный обход всех файлов и папок
    for root, dirs, files in os.walk(directory):
        # Уровень вложенности для отступов
        level = root.replace(str(directory), '').count(os.sep)
        indent = '│   ' * level
        
        # Добавляем текущую папку
        folder_name = os.path.basename(root) if root != str(directory) else directory.name
        structure.append(f"{indent}📁 {folder_name}/")
        folder_count += 1
        
        # Добавляем файлы в текущей папке
        sub_indent = '│   ' * (level + 1)
        for file in sorted(files):
            file_path = Path(root) / file
            file_size = file_path.stat().st_size
            total_size += file_size
            file_count += 1
            
            # Форматируем размер файла
            if file_size < 1024:
                size_str = f"{file_size} Б"
            elif file_size < 1024 * 1024:
                size_str = f"{file_size / 1024:.1f} КБ"
            elif file_size < 1024 * 1024 * 1024:
                size_str = f"{file_size / (1024 * 1024):.1f} МБ"
            else:
                size_str = f"{file_size / (1024 * 1024 * 1024):.1f} ГБ"
            
            structure.append(f"{sub_indent}📄 {file} ({size_str})")
    
    # Добавляем итоговую статистику
    structure.append("")
    structure.append("=" * 80)
    structure.append("СТАТИСТИКА:")
    structure.append("=" * 80)
    structure.append(f"Всего папок: {folder_count}")
    structure.append(f"Всего файлов: {file_count}")
    
    # Форматируем общий размер
    if total_size < 1024:
        total_size_str = f"{total_size} Б"
    elif total_size < 1024 * 1024:
        total_size_str = f"{total_size / 1024:.2f} КБ"
    elif total_size < 1024 * 1024 * 1024:
        total_size_str = f"{total_size / (1024 * 1024):.2f} МБ"
    else:
        total_size_str = f"{total_size / (1024 * 1024 * 1024):.2f} ГБ"
    
    structure.append(f"Общий размер: {total_size_str}")
    structure.append("=" * 80)
    
    # Записываем в файл
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write('\n'.join(structure))
    
    print(f"Сканирование завершено!")
    print(f"Результат сохранен в файл: {output_file}")
    print(f"Найдено папок: {folder_count}, файлов: {file_count}")

# Пример использования
if __name__ == "__main__":
    # Укажите путь к директории, которую нужно просканировать
    target_directory = input("Введите путь к директории: ").strip()
    
    # Укажите имя выходного файла (или нажмите Enter для имени по умолчанию)
    output_filename = input("Введите имя файла для сохранения (или нажмите Enter): ").strip()
    
    if not output_filename:
        output_filename = 'directory_structure.txt'
    
    scan_directory_and_save(target_directory, output_filename)