SELECT d.full_name, d.spec, t.salary
    FROM  Doctors d,(SELECT doc_id, SUM(summ) AS [salary]
                        FROM Transactions
						WHERE date >= '2019-01-01'
                        GROUP BY doc_id) t
    WHERE d.id = t.doc_id AND t.salary > 2500
    